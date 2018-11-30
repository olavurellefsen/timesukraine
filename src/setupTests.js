import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
jest.mock("react-ga")

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;