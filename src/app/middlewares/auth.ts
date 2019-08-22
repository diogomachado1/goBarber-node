import { Response } from 'express';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { ReqId } from '../models/Types';

interface Decoded {
  id?: number;
  iat?: number;
  exp?: number;
}

export default async (req: ReqId, res: Response, next): Promise<Response> => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoded: Decoded = await promisify(jwt.verify)(token, 'test');

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  next();
};
