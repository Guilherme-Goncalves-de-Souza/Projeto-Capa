
import Toggle from './';

export default { 
  title: 'Web/Components/Toggle',
  component: Toggle, 
}; 

const Template = (args) => <Toggle {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    label: 'Default Label',
    title: 'Default Title', 
    checked: false,
    secondary: false,
    onChange: e => null
}; 
 