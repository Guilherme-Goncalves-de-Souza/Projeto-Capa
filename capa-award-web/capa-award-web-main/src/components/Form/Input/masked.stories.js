
import { MaskedInput } from './';

export default { 
  title: 'Web/Components/MaskedInput',
  component: MaskedInput, 
}; 

const Template = (args) => <MaskedInput {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    type: 'text',
    label: 'Default Label',
    placeholder: 'Default Label',
    value: '',
    secondary: false,
    onChange: e => null,
    mask: '(99) 99999-9999'
}; 
 