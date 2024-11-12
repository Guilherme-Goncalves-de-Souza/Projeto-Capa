
import Rating from './';

export default { 
  title: 'Web/Components/Rating',
  component: Rating, 
}; 

const Template = (args) => <Rating {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    label: 'Default Label', 
    value: 3,
    secondary: false,
    onChange: e => null
}; 
 