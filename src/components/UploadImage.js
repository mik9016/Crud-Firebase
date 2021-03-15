import React, {useState,useEffect} from "react";
import {fire} from '../firebase';
import { v4 as uuid  } from 'uuid';
import {Button} from 'react-bootstrap';

export default function UploadImage() {

  const [imageUrl, setImageUrl] = useState([]);

  const readImages = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
    const storageRef = fire.storage().ref("images").child(id);
    const imageRef = fire.database().ref("images").child("daily").child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });
  };

  const getImageUrl = () => {
    const imageRef = fire.database().ref("images").child("daily");
    imageRef.on("value", (snapshot) => {
      const imageUrls = snapshot.val();
      const urls = [];
      for (let id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }
      const newState = [...imageUrl, ...urls];
      setImageUrl(newState);
    });
  };

  const deleteImage = (id) => {
    const storageRef = fire.storage().ref("images").child(id);
    const imageRef = fire.database().ref("images").child("daily").child(id);
    storageRef.delete().then(() => {
      imageRef.remove();
    });
  };

  
  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <div>
      <h1>Upload image</h1>
      <input type="file" accept="image/*" onChange={readImages} />
      {imageUrl
        ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <img src={url} alt="" />
                <Button className='m-2' variant='danger' onClick={() => deleteImage(id)}>Delete</Button>
              </div>
            );
          })
        : ""}
    </div>
  );
}
