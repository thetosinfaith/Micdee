import React, { useState } from 'react';
import './Post.css';

const Post = ({ addNewProperty }) => {
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState(['#LoveYourSkin', '#GlowGoals', '#BeautyEssentials']);
  const [newTag, setNewTag] = useState('');
  const [images, setImages] = useState([]);
  const maxChars = 100;

  const handleCaptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setCaption(value);
    }
  };

  const handleTagClick = (tag) => {
    setNewTag(tag);
    setTags(tags.filter((t) => t !== tag));
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && newTag.trim() !== '') {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const updatedImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...updatedImages]);
  };

  const handlePost = () => {
    // Logic to handle post submission
    const newProperty = {
      caption,
      tags,
      images,
    };
    addNewProperty(newProperty);
    setCaption('');
    setTags(['#LoveYourSkin', '#GlowGoals', '#BeautyEssentials']);
    setImages([]);
  };

  return (
    <div className="post-container">
      <div className="post-content">
        <div className="post-left-section">
          <h2 className="post-title">New Post</h2>
          <div className="post-user-info">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Avatar" className="post-avatar" />
            <span className="post-username">Hanna Donin</span>
          </div>

          <label className="post-label">CAPTION</label>
          <textarea
            className="post-textarea"
            rows="4"
            placeholder="Transform your skincare routine into a self-care ritual..."
            value={caption}
            onChange={handleCaptionChange}
          ></textarea>
          <span className="post-char-remaining">{maxChars - caption.length} characters remaining</span>

          <label className="post-label">TAGS</label>
          <input
            type="text"
            className="post-input"
            placeholder="Add your Instagram Tags"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={handleAddTag}
          />
          <div className="post-tags">
            {tags.map((tag, index) => (
              <span key={index} className="post-tag" onClick={() => handleTagClick(tag)}>{tag}</span>
            ))}
          </div>

          <label className="post-label">ADD IMAGES</label>
          <div className="post-image-upload">
            <input
              type="file"
              id="images"
              name="images"
              onChange={handleImageUpload}
              multiple
              style={{ display: 'none' }}
            />
            <label htmlFor="images" className="post-add-image">+</label>
          </div>

          <button className="post-post-button" onClick={handlePost}>Post</button>
        </div>

        <div className="post-right-section">
          <h2 className="post-title">Preview</h2>
          <div className="post-preview">
            <p className="post-username-preview">HannaDonin</p>
            <p className="post-caption-preview">{caption}</p>
            {images.length > 0 && (
              <div className="post-preview-images">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Preview ${index}`}
                    className="post-preview-image"
                  />
                ))}
              </div>
            )}
            <p className="post-footer-note">
              Social network updates may alter its final appearance.{' '}
              <a href="#" className="post-report-link">please report them</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
