import { Request, Response } from 'express';
//import { ReqId } from '../models/Types';
import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req: Request, res: Response): Promise<Response> {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
