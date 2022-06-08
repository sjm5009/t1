class ImageService {
  constructor() {
    this.UNSINGNED_UPLOAD_PRESET =
      process.env.REACT_APP_T1_SHOP_CLOUDINARY_PRESET;
    this.CLOUD_NAME = process.env.REACT_APP_T1_SHOP_CLOUDINARY_CLOUD_NAME;
  }

  async upload(files) {
    const formData = new FormData();
    let result = new Object();
    let fileName;

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      fileName = files[i].name;
      formData.append("file", file);
      formData.append("upload_preset", this.UNSINGNED_UPLOAD_PRESET);
      const url = `https://api.cloudinary.com/v1_1/${this.CLOUD_NAME}/image/upload`;
      await fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          let returnData = res.json();
          return returnData;
        })
        .then((data) => {
          result = {
            filePublicId: data.public_id,
            fileUrl: data.url,
            fileName: fileName,
          };
        });
    }

    return await result;
  }
}

export default ImageService;
