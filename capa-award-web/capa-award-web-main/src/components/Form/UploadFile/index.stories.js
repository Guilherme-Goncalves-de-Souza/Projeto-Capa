
import Input from './';
import { UploadFileDemo } from './styled';

export default { 
  title: 'Web/Components/UploadFile',
  component: Input, 
}; 

const Template = (args) => <Input {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
  onChange: e => null,
  onPreview: e => null,
  accept: 'image/*',  
  children: <UploadFileDemo />
}; 
 