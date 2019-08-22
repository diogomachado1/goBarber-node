import { Request } from 'express';

interface ReqId extends Request {
  userId: number;
}

export { ReqId };
