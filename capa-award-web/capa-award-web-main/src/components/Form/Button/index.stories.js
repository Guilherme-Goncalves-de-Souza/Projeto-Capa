
import { Button } from './';

export default { 
  title: 'Web/Components/Button',
  component: Button, 
}; 

const Template = (args) => <Button {...args} />; 

export const Default = Template.bind({});

Default.args = { 
   children: 'Default Text'
}; 

export const DefaultOutline = Template.bind({});

DefaultOutline.args = {
   ...Default.args,
   outline: true
};

export const Primary = Template.bind({});

Primary.args = {
   primary: true, 
   children: 'Primary Text'
}; 

export const PrimaryOutline = Template.bind({});

PrimaryOutline.args = {
   ...Primary.args,
   outline: true
};

export const Secondary = Template.bind({});

Secondary.args = {
   secondary: true, 
   children: 'Secondary Text'
}; 

export const SecondaryOutline = Template.bind({});

SecondaryOutline.args = {
   ...Secondary.args,
   outline: true
};