module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("MAIL_HOST"),
      port: env("MAIL_PORT"),
      auth: {
        user: env("MAIL_USERNAME"),
        pass: env("MAIL_PASSWORD"),
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    },
    settings: {
      defaultFrom: env("MAIL_DEFAULT_FROM"),
      defaultReplyTo: env("MAIL_DEFAULT_REPLY_TO"),
    },
  },
  // upload: {
  //   provider: "aws-s3",
  //   providerOptions: {
  //     accessKeyId: env('S3_AWS_ACCESS_KEY'),
  //     secretAccessKey: env('S3_AWS_ACCESS_SECRET'),
  //     region: env('S3_AWS_REGION'),
  //     params: {
  //       Bucket: env('S3_AWS_BUCKET_NAME')
  //     },
  //     logger: console
  //   }
  // }
});
