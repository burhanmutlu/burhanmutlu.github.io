import './App.css';
import React from 'react';
import ButtonHandler from "./components/ButtonHandler";

function App() {

    const complaintsItems = ['Karın ağrısı', 'Midede şişkinlik', 'İshal', 'Kabızlık'];
    const storyItems = ['İştahsızlık', 'Kilo kaybı']
    const resumeItems = ['HT', 'DM', 'Depresyon', 'KAH', 'CABG', 'Kolesistektomili'];
    const medicinesItems = ['Antihipertansif', 'OAD', 'Insülin', 'PPİ', 'NSAİD', 'ASA'];
    const familyHistoryItems = ['Anne', 'Baba', 'Kardeş', 'Kolon CA', 'Mide CA', 'EX'];
    const physicalExamination = ['Sol', 'Sağ', 'Alt', 'Üst', 'Kadran ağrısı'];
    const planItems = ['EndoKolon önerildi', 'Endo önerildi', 'Kolon önerildi', 'Usg istendi', 'Kan Tahlilleri istendi'];

    return (
        <div className="App">
            <ButtonHandler
                title="Şikayetler"
                items={complaintsItems}
                initialState={[]}
            />
            <ButtonHandler
                title="Hikaye"
                items={storyItems}
                initialState={[]}
            />
            <ButtonHandler
                title="Öz Geçmiş"
                items={resumeItems}
                initialState={[]}
            />
            <ButtonHandler
                title="Kullandığı İlaçlar"
                items={medicinesItems}
                initialState={[]}
            />
            <ButtonHandler
                title="Soy Geçmiş"
                items={familyHistoryItems}
                initialState={[]}
            />
            <ButtonHandler
                title="Fiziki Muayene"
                items={physicalExamination}
                initialState={[]}
            />
            <ButtonHandler
                title="Plan"
                items={planItems}
                initialState={[]}
            />

            <div className="result">cc</div>


        </div>
    );
}

export default App;
