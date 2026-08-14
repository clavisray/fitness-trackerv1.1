import { useState, type FormEvent } from "react";
import type { AddEventModalProps, CalendarEventType } from "../types/ui";

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
        
        }

        onAddEvent(newEvent);
    };

    return (
        <div onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl h-auto">
                Uzupełnij zdarzenie dla dnia {day}/{month}

                <form 
                    className="flex flex-col gap-4 mb-4"
                    onSubmit={handleSubmit}
                    >
                    
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

                    <input
                        type="text"
                        placeholder="Tytuł zdarzenia"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        className=""
                        placeholder="Treść / notatka"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    
                    <button 
                        className="bg-zinc-200 cursor-pointer hover:bg-zinc-400 transition"
                        type="submit">
                        Zatwierdź
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddEventModal;