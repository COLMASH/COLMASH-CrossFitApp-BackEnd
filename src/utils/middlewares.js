const jwt = require("jsonwebtoken");
const Busboy = require("busboy");
const cloudinary = require("cloudinary").v2;

exports.auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("Su sesión expiró");
    }

    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("Su sesión expiró");
    }

    const { userId, coachId, adminId } = jwt.verify(token, process.env.SECRET);

    req.userId = userId;
    req.coachId = coachId;
    req.adminId = adminId;

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.formData = (req, res, next) => {
  const busboy = new Busboy({ headers: req.headers });

  req.body = {};

  let uploadingFile = false;
  let uploadingCount = 0;

  function done() {
    if (uploadingFile) return;
    if (uploadingCount > 0) return;
    next();
  }

  busboy.on("field", (key, value) => {
    req.body[key] = value;
  });

  busboy.on("file", (key, file) => {
    uploadingFile = true;
    uploadingCount++;

    const stream = cloudinary.uploader.upload_stream(
      {
        upload_preset: "crossfitapp",
      },
      (err, res) => {
        if (err) {
          throw new Error("Invalid image");
        }

        req.body[key] = res.secure_url;
        uploadingFile = false;
        uploadingCount--;
        done();
      }
    );

    file.on("data", (buffer) => {
      stream.write(buffer);
    });

    file.on("end", () => {
      stream.end();
    });
  });

  busboy.on("finish", () => {
    done();
  });

  req.pipe(busboy);
};

exports.adminFilter = (req, res, next) => {
  if (req.body.name === "") {
    delete req.body.name;
  }
  if (req.body.lastname === "") {
    delete req.body.lastname;
  }
  if (req.body.dniType === "") {
    delete req.body.dniType;
  }
  if (req.body.dni === "") {
    delete req.body.dni;
  }
  if (req.body.phone === "") {
    delete req.body.phone;
  }
  if (req.body.birthday === "") {
    delete req.body.birthday;
  }
  next();
};

exports.userFilter = (req, res, next) => {
  if (req.body.name === "") {
    delete req.body.name;
  }
  if (req.body.lastname === "") {
    delete req.body.lastname;
  }
  if (req.body.dniType === "") {
    delete req.body.dniType;
  }
  if (req.body.dni === "") {
    delete req.body.dni;
  }
  if (req.body.address === "") {
    delete req.body.address;
  }
  if (req.body.neighborhood === "") {
    delete req.body.neighborhood;
  }
  if (req.body.phone === "") {
    delete req.body.phone;
  }
  if (req.body.height === "") {
    delete req.body.height;
  }
  if (req.body.weight === "") {
    delete req.body.weight;
  }
  if (req.body.birthday === "") {
    delete req.body.birthday;
  }

  next();
};

exports.coachFilter = (req, res, next) => {
  if (req.body.name === "") {
    delete req.body.name;
  }
  if (req.body.lastname === "") {
    delete req.body.lastname;
  }
  if (req.body.dniType === "") {
    delete req.body.dniType;
  }
  if (req.body.dni === "") {
    delete req.body.dni;
  }
  if (req.body.phone === "") {
    delete req.body.phone;
  }
  if (req.body.birthday === "") {
    delete req.body.birthday;
  }

  next();
};

exports.wodFilter = (req, res, next) => {
  if (req.body.activity === "") {
    delete req.body.activity;
  }
  if (req.body.modality === "") {
    delete req.body.modality;
  }
  if (req.body.exercice1 === "") {
    delete req.body.exercice1;
  }
  if (req.body.exercice2 === "") {
    delete req.body.exercice2;
  }
  if (req.body.exercice3 === "") {
    delete req.body.exercice3;
  }
  if (req.body.repetition1 === "") {
    delete req.body.repetition1;
  }
  if (req.body.repetition2 === "") {
    delete req.body.repetition2;
  }
  if (req.body.repetition3 === "") {
    delete req.body.repetition3;
  }
  if (req.body.capacity === "") {
    delete req.body.capacity;
  }
  if (req.body.startDate === "") {
    delete req.body.startDate;
  }
  if (req.body.endDate === "") {
    delete req.body.endDate;
  }
  if (req.body.notes === "") {
    delete req.body.notes;
  }

  next();
};
