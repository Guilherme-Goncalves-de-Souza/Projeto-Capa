import { useCallback } from 'react'
import PropTypes from 'prop-types';

import {      
  UploadFileContent
} from './styled'  

import {useDropzone} from 'react-dropzone'
import { exposeStrapiError } from 'utils'
import { UploadImage } from 'services/api'

const UploadFile = ({ onChange, onPreview, accept = 'image/*', children, validate }) => {  

  const onDrop = useCallback(acceptedFiles => {
    loadImage(acceptedFiles) 
  }, [])

  const loadImage = async files => {
    const [file] = files
    if (file) { 
      if( validate && typeof validate === 'function' ){ if(! await validate(file)){ return ;} }
      if( onPreview && typeof onPreview === 'function' ){ onPreview(URL.createObjectURL(file)) ;}
      upFile(file)
    }
  }

  const upFile = async file => {
    const result = await UploadImage(file)
    if(!exposeStrapiError(result)){
      if( onChange && typeof onChange === 'function' && result?.length ){ onChange(result?.[0]) ;}
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles:1, accept }) 

  return (
    <>   
      <UploadFileContent {...getRootProps()}>
        <input {...getInputProps()} style={{display:'none'}} />
        { children }
      </UploadFileContent> 
    </>
  );
}


UploadFile.propTypes = { 
  onChange: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  accept: PropTypes.string,
  children: PropTypes.element.isRequired
};


UploadFile.defaultProps = {
  onChange: undefined,
  onPreview: undefined,
  accept: 'image/*',  
  children: undefined
};

export default UploadFile; 