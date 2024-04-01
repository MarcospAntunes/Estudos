import { customRender } from "@alura/test-commons/react-testing-library";
import HomeScreen from "./HomeScreen";

const render = customRender((props) => {
  return <section>{props.children}</section>;
});

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
