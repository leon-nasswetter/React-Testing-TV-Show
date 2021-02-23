import React from "react";
import { render, screen, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { fetchShow } from "./api/fetchShow";


jest.mock("./api/fetchShow.js");


test('renders without error', () => {
    fetchShow.mockResolvedValueOnce({
        data: {
          image: {
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
          },
          name: "Stranger Things",
          summary: "<p>A really good show</p>",
          _embedded: {
            episodes: [
              {
                id: 1,
                name: "foo",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 1,
                season: 1,
                summary: "bar",
                runtime: 60,
              },
              {
                id: 2,
                name: "funny",
                image: {
                  medium:
                    "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
                },
                number: 2,
                season: 1,
                summary: "bunny",
                runtime: 60,
              }
            ],
          },
        },
      });
    render(<App />);
});

