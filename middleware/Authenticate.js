import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    const { token } = req.cookies;
    
  console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        res.locals = {id: decoded.id, name: decoded.name}
        next();
    } catch (error) {
        res.clearCookie('token');
        return res.status(401).json({ 
            success: false, 
            message: "Sessão expirada. Faça login novamente." 
    });
}
}

export {
    authenticate
}

