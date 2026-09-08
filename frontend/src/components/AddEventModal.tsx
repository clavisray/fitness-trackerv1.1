import { useState, type FormEvent } from "react";
import type { AddEventModalProps, CalendarEventType } from "../types/ui";
import close from '../assets/close.svg'
import { monthNamesGenitive } from "../hooks/useCalendar";
import useAuth from '../hooks/useAuth';


function AddEventModal({ day, month, year, onClose, onAddEvent }: AddEventModalProps) {

    const { user } = useAuth();

    console.log(user);

    const [eventType, setEventType] = useState<"workout" | "diet" | "note">("workout");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const eventDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;


    const buttonFormat = "cursor-pointer rounded-xl px-4 py-3 w-full flex items-center justify-center transition"

    console.log(eventType);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const newEvent: CalendarEventType = {
            id: crypto.randomUUID(),
            type: eventType,
            title,
            content: content,
            day,
            month,
            year,
            isDone: false,
        }

        const workoutData = {
            userId: user?.id,
            title: title,
            workoutType: eventType,
            isDone: false,
            notes: content,
            duration: 0,
            eventDate: eventDate,
            doneDate: null
        }

        switch(eventType) {
            case "workout": {
                try {
                    fetch("http://localhost:8080/api/workout", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(workoutData),
                    })
                } catch {
                    
                }
                break;
            }

            /* case "diet": { 
                fetch("http://localhost:8080/api/diet", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(workoutData),
                })
                break;
            }

            case "note": { 
                fetch("http://localhost:8080/api/note", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(workoutData),
                })
                break;
            } */
        }
        
        onAddEvent(newEvent);
        onClose();
    };

    return (
        <div onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl h-auto">
                <div className="flex justify-between mb-3 font-bold text-zinc-500">
                    Utwórz nowe zdarzenie dla dnia {day} {monthNamesGenitive[month].toLowerCase()} {year}
                    <img src={close} alt="close" className="cursor-pointer hover:bg-zinc-200 items-center justify-center rounded-sm" onClick={onClose}/>
                </div>
                
                <form 
                    className="flex flex-col gap-4 mb-4 w-full"
                    onSubmit={handleSubmit}
                    >
                    
                    <div className="flex gap-4 mt-4 w-full justify-between items-center">
                        <label
                            className=
                                {`${buttonFormat} 
                                ${eventType === "workout"
                                    ? "bg-sky-400 border border-sky-500 text-sky-700  font-bold"
                                    : "bg-sky-200 border border-sky-400 text-sky-700 hover:bg-sky-300 hover:border-sky-500" 
                                }`}>

                            <input 
                                type="radio" 
                                name="eventType" 
                                value="workout" 
                                checked={eventType === "workout"}
                                onChange={() => setEventType("workout")}
                                className="appearance-none"

                            />
                            Trening
                        </label>

                        <label 
                            className=
                                {`${buttonFormat}
                                ${eventType === "diet"
                                    ? "bg-emerald-300 border border-emerald-400 text-emerald-700 font-bold"
                                    : "bg-emerald-100 border border-emerald-300 text-emerald-700 hover:bg-emerald-300 hover:border-emerald-400"
                                }`}>

                            <input 
                                type="radio" 
                                name="eventType" 
                                value="diet" 
                                checked={eventType === "diet"}
                                onChange={() => setEventType("diet")}
                                className="appearance-none"
                            
                            />
                            Dieta
                        </label>

                        <label
                            className=
                                {`${buttonFormat} 
                                ${eventType === "note"
                                    ? "bg-violet-300 border border-violet-500 text-emerald-700 font-bold"
                                    : "bg-violet-200 border border-violet-300 text-violet-700 hover:bg-violet-300 hover:border-violet-400"
                                }`}>

                            <input 
                                type="radio" 
                                name="eventType" 
                                value="note" 
                                checked={eventType === "note"}
                                onChange={() => setEventType("note")}
                                className="appearance-none"
                        
                            />
                            <p className="">Notatka</p>
                            
                        </label>
                    </div>

                    <input
                        className="p-2 border rounded-sm border-indigo-200 focus:border-indigo-500 focus:outline-none"
                        type="text"
                        placeholder="Tytuł zdarzenia"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="h-50 p-2 border rounded-sm border-indigo-200 focus:border-indigo-500 focus:outline-none"
                        placeholder="Treść / notatka"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    
                    <button 
                        className="bg-sky-200 rounded-xl py-1 cursor-pointer opacity-50 hover:opacity-100 hover:text-sky-700 transition"
                        type="submit">
                        <span className="font-bold">ZATWIERDŹ</span>
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default AddEventModal;