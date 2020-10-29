import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const userExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, nome, email, idade, peso, altura } = await Students.create(
      req.body
    );

    return res.json({
      id,
      nome,
      email,
      idade,
      peso,
      altura,
    });
  }

  async update(req, res) {}
}

export default new StudentsController();
