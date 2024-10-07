// export const login = async (email, password) => {
//     try {
//         const response = await fetch('https://localhost:8080/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });

//         // Kiểm tra xem phản hồi có hợp lệ không
//         if (!response.ok) {
//             const errorData = await response.json();
//             const errorMessage = errorData.message || 'Đăng nhập thất bại';
//             throw new Error(errorMessage); // Ném ra lỗi với thông điệp
//         }

//         // Trả về dữ liệu JSON
//         return await response.json(); // Đảm bảo rằng bạn trả về JSON đúng cách
//     } catch (error) {
//         console.error('Lỗi trong quá trình đăng nhập:', error);
//         throw error; // Ném lại lỗi để xử lý ở nơi gọi hàm này
//     }
// };
