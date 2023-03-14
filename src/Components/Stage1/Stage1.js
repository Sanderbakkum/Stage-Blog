import logoqc from '../images/logoqc.png'
import qcimage from '../images/qcimage.jpeg'
import "./Stage1.css";



const Stage1 = () => {
    return (
        <div className="con__qc">
            <div className="Week_container">
                <p className="title__weken">Weken:</p>
                <ul>
                    <div className="li__half1">
                        <li><h5>Week 1-2</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 3-4</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 5-6</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 7-8</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 9-10</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                 

                    </div>
                    <div className="li__half2">
                        <li><h5>Week 11-12</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 13-14</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 15-16</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 17-18</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                        <li><h5>Week 19-20</h5><p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een
                             onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen
                              vijf eeuwen overleefd maar is ook, vrijwel onveranderd</p></li>
                    </div>
                </ul>

            </div>


            <div className="container-right">
                <article className="verhaal">
                    <div className="text-con">
                        <div className="text-title">
                           <h2>Questcontrol B.V.</h2>
                        </div>
                        <div className="text">
                            <p>Zij zijn een groothandel in elektronica, multimedia en speelgoed binnen de BeNeLux. Op het gebied van multimediaproducten, 
                                zijn zij leverancier voor computer accessoires, console gaming, PC gaming producten, licentie artikelen, gadgets, fotografie producten 
                                en audio producten. Sinds hun oprichting in 2002, leveren zij unieke producten voor hun klanten, wat hun onderscheidt van de rest van de markt.</p>
                        </div>
                    </div>
                    <div className="qc-images">
                        <div><img src={logoqc} className="App-logoqc" alt="logoqc" /></div>
                        <div><img src={qcimage} className="App-qcimage" alt="imageqc" /></div>
                    </div>
                 
                    
                </article>
            </div>
        </div>
    )
}

export default Stage1;