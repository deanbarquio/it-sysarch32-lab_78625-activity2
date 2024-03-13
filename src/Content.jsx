// Content.jsx
import React from 'react';
import Student from './Student'; // assuming Student component is in a separate file

function Content() {
    // Sample data array of students
    const students = [
        { id: 1, name: "John Doe", email: "john@doe.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 2, name: "Juan Tan", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 3, name: "Gheyl Aguilar", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 4, name: "Jelu Cajipe", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 5, name: "Edz Son", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 6, name: "Vhea Valmoria", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 7, name: "Mive Carzon", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },
        { id: 8, name: "Jayr Mingyu", email: "juan@tan.com", image: "https://img.freepik.com/free-photo/smiling-man_1098-15443.jpg?w=740&t=st=1709364313~exp=1709364913~hmac=22853f8e083eaf5fb7abaae0af172501ce5877117f8cbf3b4cbe89a1d7698c88" },

        
        // Add more student objects here as needed
    ];

    return (
        <div className="content">
            {students.map((student) => (
                <Student
                    key={student.id} // Ensure unique key for each student
                    id={student.id}
                    name={student.name}
                    email={student.email}
                    image={student.image} // Pass the image URL as a prop
                />
            ))}
        </div>
    );
}

export default Content;
