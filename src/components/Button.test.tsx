import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Button } from "./Button";


let container: any = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Render Button", () => {
  act(() => {
    render(<Button children="New Data" getInitialData={alert} />, container);
  });
  expect(container.textContent).toBe("New Data");
});


it("Event check", () => {
  const onClick = jest.fn();
  act(() => {
    render(<Button getInitialData={onClick} children="New Data"/>, container);
  });

  // получаем элемент button и кликаем на него несколько раз
  const button = document.querySelector("button");


  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(onClick).toHaveBeenCalledTimes(1);


  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });
  expect(onClick).toHaveBeenCalledTimes(6);
});