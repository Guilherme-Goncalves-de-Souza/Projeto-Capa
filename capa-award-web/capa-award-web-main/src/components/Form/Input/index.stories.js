
import Input from './';

export default { 
  title: 'Web/Components/Input',
  component: Input, 
}; 

const Template = (args) => <Input {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    type: 'text',
    label: 'Default Label',
    placeholder: 'Default Label',
    value: '',
    secondary: false,
    onChange: e => null
}; 
 