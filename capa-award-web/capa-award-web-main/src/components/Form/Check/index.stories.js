
import Check from './';

export default { 
  title: 'Web/Components/Check',
  component: Check, 
}; 

const Template = (args) => <Check {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    label: 'Default Label',
    title: 'Default Title', 
    checked: false,
    secondary: false,
    onChange: e => null
}; 
 