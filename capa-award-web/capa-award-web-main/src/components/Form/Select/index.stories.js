
import Select from './';

export default { 
  title: 'Web/Components/Select',
  component: Select, 
}; 

const Template = (args) => <Select {...args} />; 

export const Default = Template.bind({}); 

Default.args = { 
    placeholder: 'Default Placeholder',
    options: [
        { id:1, title:'value 1' },
        { id:2, title:'value 2' },
        { id:3, title:'value 3' }
    ],
    value: null,
    small: false,
    secondary: false,
    onChange: e => null
}; 
 