import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";

const DarkLightToggle = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [mode, setMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("mode") || "light";
        }
        return "light"; // Default to "light" mode if window is undefined
    });

    const colors = {
        light: [
            { name: "blue", color: "bg-blue-600", id: 1 },
            { name: "red", color: "bg-red-600", id: 2 },
            { name: "green", color: "bg-green-600", id: 3 },
            { name: "zinc", color: "bg-zinc-900", id: 4 },
            { name: "amber", color: "bg-amber-600", id: 5 },
        ],
        dark: [
            { name: "blue", color: "bg-blue-600", id: 1 },
            { name: "red", color: "bg-red-600", id: 2 },
            { name: "green", color: "bg-green-600", id: 3 },
            { name: "zinc", color: "bg-zinc-900", id: 4 },
            { name: "amber", color: "bg-amber-600", id: 5 },
        ],
    };

    useEffect(() => {
        const savedColor = localStorage.getItem('selectedColor');
        if (savedColor) {
            setSelectedColor(parseInt(savedColor));
        }

        const storedMode = localStorage.getItem("mode");
        if (storedMode) {
            setMode(storedMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    const handleClick = (id) => {
        setSelectedColor(id);
        localStorage.setItem('selectedColor', id);
    };

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    return (
        <div className="col-span-1 bg-background border-accent border-2 text-accent rounded-lg p-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">Update Account Setting</h3>
            <div className="mb-4">
                <label className="block text-accent mb-2">Dark Mode</label>
                <div className="flex items-center space-x-4">
                    <button
                        className={`mt-4 bg-accent text-white px-4 py-2 rounded ${mode === "light" && "border-2 border-border"}`}
                        onClick={() => handleModeChange("light")}
                    >
                        <Sun className="w-5 h-5 shrink-0" /> Light
                    </button>
                    <button
                        className={`mt-4 bg-accent text-white px-4 py-2 rounded ${mode === "dark" && "border-2 border-border"}`}
                        onClick={() => handleModeChange("dark")}
                    >
                        <Moon className="w-5 h-5 shrink-0" /> Dark
                    </button>
                </div>
            </div>
            <div className="mb-4">
                <span className="block text-accent mb-2">Color Theme</span>
                <div className="flex space-x-2">
                    {colors[mode]?.map((colorObj) => (
                        <div
                            key={colorObj.id}
                            className={`w-8 h-8 cursor-pointer rounded-full ${colorObj.color} flex items-center justify-center`}
                            onClick={() => handleClick(colorObj.id)}
                        >
                            {selectedColor === colorObj.id && (
                                <FaCheck className="w-4 h-4 text-white" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DarkLightToggle;
