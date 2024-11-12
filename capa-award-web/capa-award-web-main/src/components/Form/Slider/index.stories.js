
import Slider from './';

export default { 
  title: 'Web/Components/Slider',
  component: Slider, 
}; 

const Template = (args) => <Slider {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    label: 'Default Label', 
    value: 50,
    secondary: false,
    onChange: e => null
}; 
 