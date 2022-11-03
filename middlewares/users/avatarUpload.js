// importing files
const uploader = require('../../utilities/singleFileUploader');

function avatarUpload(req, res, next) {
  const upload = uploader(
    'avatars',
    ['image/jpeg', 'image/jpg', 'image/png'],
    5000000,
    'Only .jpg, jpeg or .png format allowed!'
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = avatarUpload;
