import { useState, type FormEvent } from "react";
import type { AddEventModalProps, CalendarEventType } from "../types/ui";
import close from '../assets/close.svg'
import { monthNamesGenitive } from "../hooks/useCalendar";


function AddEventModal({ day, month, onClose, onAddEvent }: AddEventModalProps) {
    const [eventType, setEventType] = useState<"workout" | "diet" | "note">("workout");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const buttonFormat = "cursor-pointer rounded-xl px-4 py-3 w-full flex items-center justify-center"

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const newEvent: CalendarEventType = {
            id: crypto.randomUUID(),
            type: eventType,
            title,
            content: content,
            day,
            month,
            year: 2026,
            isDone: false,
        }
        onAddEvent(newEvent);
        onClose();
    };
    console.log(day); console.log(month);

    return (
        <div onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl h-auto">
                <div className="flex justify-between mb-3">
                    Utwórz nowe zdarzenie dla dnia {day} {monthNamesGenitive[month].toLowerCase()}
                    <img src={close} alt="close" className="cursor-pointer hover:bg-zinc-200 items-center justify-center rounded-sm" onClick={onClose}/>
                </div>
                
                <form 
                    className="flex flex-col gap-4 mb-4 w-full"
                    onSubmit={handleSubmit}
                    >
                    
                    <div className="flex gap-4 mt-4 w-full justify-between items-center">
                        <label
                            className={`${buttonFormat} bg-sky-300 border border-sky-400 text-sky-700 hover:bg-sky-400 hover:border-sky-500`}>
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
                            className={`${buttonFormat} bg-emerald-200 border border-emerald-300 text-emerald-700 hover:bg-emerald-300 hover:border-emerald-400`}>
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
                            className={`${buttonFormat} bg-violet-200 border border-violet-300 text-violet-700 hover:bg-violet-300 hover:border-violet-400`}>
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
                        className="bg-gradient-to-r from-lime-200 via-sky-100 to-indigo-200 rounded-xl py-1 cursor-pointer opacity-50 hover:opacity-100 hover:text-sky-700 fond-bold transition"
                        type="submit">
                        ZATWIERDŹ
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddEventModal;