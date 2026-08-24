import { useState, type FormEvent } from "react";
import type { AddEventModalProps, CalendarEventType } from "../types/ui";
import close from '../assets/close.svg'

function AddEventModal({ day, month, onClose, onAddEvent }: AddEventModalProps) {
    const [eventType, setEventType] = useState<"workout" | "diet" | "note">("workout");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

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
        }
        onAddEvent(newEvent);
        onClose();
    };

    return (
        <div onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl h-auto">
                <div className="flex justify-between">
                    Uzupełnij zdarzenie dla dnia {day}/{month}
                    <img src={close} alt="close" className="cursor-pointer hover:bg-zinc-200 items-center justify-center rounded-sm" onClick={onClose}/>
                </div>
                
                <form 
                    className="flex flex-col gap-4 mb-4"
                    onSubmit={handleSubmit}
                    >
                    
                    <div className="flex gap-4 mt-4">
                        <label>
                            <input 
                                type="radio" 
                                name="eventType" 
                                value="workout" 
                                checked={eventType === "workout"}
                                onChange={() => setEventType("workout")}
                            
                            />
                            Trening
                        </label>

                        <label>
                            <input 
                                type="radio" 
                                name="eventType" 
                                value="diet" 
                                checked={eventType === "diet"}
                                onChange={() => setEventType("diet")}
                            
                            />
                            Dieta
                        </label>

                        <label>
                            <input 
                                type="radio" 
                                name="eventType" 
                                value="note" 
                                checked={eventType === "note"}
                                onChange={() => setEventType("note")}
                            
                            />
                            Notatka
                        </label>
                    </div>

                    <input
                        className="p-2 border rounded-sm border-indigo-200"
                        type="text"
                        placeholder="Tytuł zdarzenia"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className="p-2 border rounded-sm border-indigo-200"
                        placeholder="Treść / notatka"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    
                    <button 
                        className="bg-zinc-200 rounded-xl py-1 cursor-pointer hover:bg-indigo-400 transition"
                        type="submit">
                        Zatwierdź
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddEventModal;