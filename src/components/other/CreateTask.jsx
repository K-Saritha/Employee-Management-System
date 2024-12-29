import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        
        const employees = JSON.parse(localStorage.getItem('employees'));
        
        if (!employees) {
            alert('No employees data found!');
            return;
        }

        // Update the specific employee's tasks
        const updatedEmployees = employees.map((employee) => {
            if (employee.firstName === asignTo) {
                return {
                    ...employee,
                    tasks: [...(employee.tasks || []), newTask],
                    taskCounts: {
                        ...employee.taskCounts,
                        newTask: (employee.taskCounts?.newTask || 0) + 1,
                    },
                };
            }
            return employee;
        });

        // Update only the employees data in localStorage
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Update AuthContext if needed
        if (setUserData) {
            setUserData(prev => ({
                ...prev,
                employees: updatedEmployees
            }));
        }

        // Reset form fields
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAsignTo('');
        setCategory('');
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
            <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            required
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            required
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            required
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Employee name"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Design, dev, etc."
                        />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    ></textarea>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;