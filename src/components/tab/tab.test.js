import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tab from "./tab";

const tabList = [
    { label: "首頁", content: <p>這是首頁內容 🏠</p> },
    { label: "關於我們", content: <p>這是關於我們的內容 📖</p> },
    { label: "聯絡我們", content: <p>這是聯絡我們的內容 📞</p> },
];

describe("Tab Component", () => {
    test("renders the correct number of tabs", () => {
        render(<Tab tabList={tabList} />);
        const tabButtons = screen.getAllByRole("button");
        expect(tabButtons.length).toBe(3);
    });

    test("renders the default active tab content", () => {
        render(<Tab tabList={tabList} />);
        expect(screen.getByText("這是首頁內容 🏠")).toBeInTheDocument();
    });

    test("switches to correct tab content when clicked", () => {
        render(<Tab tabList={tabList} />);
        const aboutTab = screen.getByText("關於我們");
        fireEvent.click(aboutTab);
        expect(screen.getByText("這是關於我們的內容 📖")).toBeInTheDocument();
    });

    test("switches tab with keyboard arrow keys", () => {
        render(<Tab tabList={tabList} />);
        const tabContainer = screen.getByRole("presentation");
        fireEvent.keyDown(tabContainer, { key: "ArrowRight" });

        // 預期會切換到第二個標籤
        expect(screen.getByText("這是關於我們的內容 📖")).toBeInTheDocument();

        fireEvent.keyDown(tabContainer, { key: "ArrowLeft" });

        // 預期會回到第一個標籤
        expect(screen.getByText("這是首頁內容 🏠")).toBeInTheDocument();
    });

    test("applies active class to selected tab", () => {
        render(<Tab tabList={tabList} />);
        const aboutTab = screen.getByText("關於我們");
        fireEvent.click(aboutTab);
        expect(aboutTab).toHaveClass("active");
    });
});