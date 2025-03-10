import React from "react";
import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { toggleTheme } from "../../../Redux/store";
import "./ColorSwitch.css";

function ColorSwitch() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggle = (checked: boolean) => {
    dispatch(toggleTheme());
    if (checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="container_switch">
      <Switch
        className="switch"
        checked={isDarkMode}
        onChange={handleToggle}
        checkedChildren={<MoonOutlined className="icon_switch" />}
        unCheckedChildren={<SunOutlined className="icon_switch"/>}
      />
    </div>
  );
}

export default ColorSwitch;
