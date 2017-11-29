import "raf/polyfill";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import serializer from "enzyme-to-json/serializer";

expect.addSnapshotSerializer(serializer);
configure({ adapter: new Adapter() });
