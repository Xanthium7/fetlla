import nodemailer from "nodemailer";
export const sendMail = async (req, res) => {
  try {
    const { title, message, email } = req.body;

    let transporter = nodemailer.createTransport({
      service :"gmail",
      auth: {
        user: "mynameisaswin321@gmail.com",
        pass: "nqxooclkzxxnrfsa",
      },
    });

    let messages = await transporter.sendMail({
      from: "mynameisaswin321@gmail.com", // sender address
      to: "fetllaofficial@gmail.com", // list of receivers
      subject: "enquiry mail", // Subject line
      text: `email of sender : ${email}
            subject : ${title}
            message : ${message}
            `, // plain text body
    });
    res.status(200).json({ status: true, message: "sucess" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "failed" });
  }
};
