import { createContext, useState } from "react";
import Theme from "./components/Theme/Theme";
export const AppContext = createContext();
export default function App() {
  const [message, setMessage] = useState("Hello anh em F8");
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider
      value={{
        message,
        setMessage,
        theme,
        setTheme,
      }}
    >
      <Theme />
    </AppContext.Provider>
  );
}

/*
App
    - Theme
        - Header
        - Content
Cách 1: Dùng props
Cách 2: Dùng Context API
- Tạo object Context bằng cách sử dụng hàm React.createContext  
- Provider: Gửi dữ liệu từ context tới các component con
- Consumer: Lấy dữ liệu từ component
+ Xác định được Context cần lấy dữ liệu
+ Gọi component Consumer để lấy dữ liệu hoặc thông qua hook useContext()
*/
