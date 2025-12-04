import jwt from 'jsonwebtoken';

// Use a hardcoded secret for development to ensure consistency
const JWT_SECRET = 'your-super-secret-jwt-key-change-in-production-environment';
const JWT_EXPIRES_IN = '7d';

console.log('Auth - JWT_SECRET loaded:', !!JWT_SECRET);
console.log('Auth - Environment JWT_SECRET:', process.env.JWT_SECRET);

/**
 * Generate JWT token for user
 * @param {Object} payload - User data to encode
 * @returns {String} JWT token
 */
export function generateToken(payload) {
  console.log('Token generation - JWT_SECRET exists:', !!JWT_SECRET);
  console.log('Token generation - Payload:', payload);
  
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    issuer: 'employee-verification-portal',
    audience: 'verification-users'
  });
  
  console.log('Token generation - Generated token preview:', token.substring(0, 50) + '...');
  return token;
}

/**
 * Verify JWT token
 * @param {String} token - JWT token to verify
 * @returns {Object} Decoded payload
 */
export function verifyToken(token) {
  try {
    console.log('Token verification - JWT_SECRET exists:', !!JWT_SECRET);
    console.log('Token verification - Token preview:', token.substring(0, 50) + '...');
    
    const decoded = jwt.verify(token, JWT_SECRET, {
      issuer: 'employee-verification-portal',
      audience: 'verification-users'
    });
    
    console.log('Token verification - Decoded payload:', decoded);
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error.message);
    throw new Error('Invalid or expired token: ' + error.message);
  }
}

/**
 * Extract token from Authorization header
 * @param {Object} req - Express request object
 * @returns {String|null} JWT token or null
 */
export function extractTokenFromHeader(req) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  return null;
}

/**
 * Authentication middleware for API routes
 */
export function authenticate(req, res, next) {
  try {
    const token = extractTokenFromHeader(req);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }

    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || 'Invalid authentication'
    });
  }
}

/**
 * Admin authentication middleware
 */
export function authenticateAdmin(req, res, next) {
  try {
    const token = extractTokenFromHeader(req);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }

    const decoded = verifyToken(token);
    
    if (decoded.role !== 'admin' && decoded.role !== 'hr_manager' && decoded.role !== 'super_admin') {
      return res.status(403).json({
        success: false,
        message: 'Admin access required'
      });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || 'Invalid authentication'
    });
  }
}

/**
 * Check if user has specific permission (for admins)
 */
export function hasPermission(permission) {
  return (req, res, next) => {
    if (!req.admin || !req.admin.permissions) {
      return res.status(403).json({
        success: false,
        message: 'Permission denied'
      });
    }

    if (!req.admin.permissions.includes(permission)) {
      return res.status(403).json({
        success: false,
        message: `Permission ${permission} required`
      });
    }

    next();
  };
}

/**
 * Verifier authentication middleware
 */
export function authenticateVerifier(req, res, next) {
  try {
    const token = extractTokenFromHeader(req);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token is required'
      });
    }

    const decoded = verifyToken(token);
    
    if (decoded.role !== 'verifier') {
      return res.status(403).json({
        success: false,
        message: 'Verifier access required'
      });
    }

    req.verifier = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message || 'Invalid authentication'
    });
  }
}