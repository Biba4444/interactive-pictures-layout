import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    if (isFirstRender) {
      const savedTheme = localStorage.getItem("theme") || "light";
      handleThemeChange(savedTheme);
      setIsFirstRender(false);
      return;
    }
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme, isFirstRender]);

  return (
    <div className="theme-changer">
      <button onClick={() => handleThemeChange("light")}>Light</button>
      <button onClick={() => handleThemeChange("dark")}>Dark</button>
    </div>
  );
};

export default ThemeChanger;
