// import { Moon, Sun } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { useTheme } from "@/components/theme-provider"

// export function ModeToggle() {
//     const { setTheme } = useTheme()

//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button variant="outline" size="icon">
//                     <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//                     <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//                     <span className="sr-only">Toggle theme</span>
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//                 <DropdownMenuItem onClick={() => setTheme("light")}>
//                     Sáng
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("dark")}>
//                     Tối
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => setTheme("system")}>
//                     System
//                 </DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// }

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
// Trả lại đường dẫn alias gốc
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    // 1. Lấy cả 'theme' (trạng thái hiện tại) và 'setTheme'
    const { theme, setTheme } = useTheme()

    // 2. Tạo hàm toggle
    const toggleTheme = () => {
        // Nếu theme hiện tại là 'dark', thì chuyển sang 'light', và ngược lại
        // Nếu lỡ theme là 'system', nó cũng sẽ chuyển sang 'dark'
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        // 3. Bỏ DropdownMenu, chỉ giữ lại Button
        // 4. Thêm onClick={toggleTheme} vào Button
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}