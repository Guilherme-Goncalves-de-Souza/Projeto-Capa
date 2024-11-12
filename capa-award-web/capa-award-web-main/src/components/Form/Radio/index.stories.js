
import Radio from './';

export default { 
  title: 'Web/Components/Radio',
  component: Radio, 
}; 

const Template = (args) => <Radio {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    label: 'Default Label',
    title: 'Default Title', 
    checked: false,
    secondary: false,
    onChange: e => null
}; 
 