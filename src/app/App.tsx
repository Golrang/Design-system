import { Button } from "components/button";

import { RadioButton } from "components/radioButton";
export const App = () => {
  return (
    <div className=" max-w-md mx-auto p-32">
      <Button
        className="mb-2"
        colorType="Purple"
        size="Small"
        shape="Circle"
        type="submit"
        onClick={(e) => console.log(e)}
      >
        Buy
        <svg
          className="w-5 h-5 ml-2 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      </Button>{" "}
      <br />
      <Button
        className="mb-2"
        colorType="Default"
        size="Base"
        shape="Round"
        type="submit"
      >
        {" "}
        Default
      </Button>{" "}
      <br />
      <Button
        className="mb-2"
        colorType="Dark"
        size="Large"
        shape="Round"
        type="submit"
        disabled={true}
      >
        {" "}
        disabled
      </Button>{" "}
      <br />
      <Button
        className="mb-2"
        colorType="Green"
        size="ExtraLarge"
        shape="Circle"
        type="submit"
        disabled={true}
      >
        {" "}
        Green
      </Button>{" "}
      <br />
      <Button
        className="mb-2"
        colorType="Light"
        size="ExtraSmall"
        shape="Square"
        type="submit"
        disabled={true}
      >
        {" "}
        Light
      </Button>{" "}
      <br />


      <div className="flex flex-wrap"></div>
      <RadioButton
        isRtl={true}
        size="Large"
        colorType="Default"
        value={"100"}
        name="somaye"
        id="somaye"
      >
        سمیه
      </RadioButton>


      <RadioButton
        isRtl={true}
        size="Base"
        colorType="Purple"
        value={"120"}
        name="somaye"
        id="somaye2"
      >
        سمیه2
      </RadioButton>

      <RadioButton
        isRtl={false}
        size="ExtraLarge"
        colorType="Green"
        value={"120"}
        name="radio"
        id="radio-one"
        className="bg-pink-300 checked:bg-rose-500 cursor-pointer"
      >
       radio-one
      </RadioButton>


    </div>
  );
};
