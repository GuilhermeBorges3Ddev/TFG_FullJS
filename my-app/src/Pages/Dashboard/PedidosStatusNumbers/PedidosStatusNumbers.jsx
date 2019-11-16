import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon';
import FormatListBulletedTypeIcon from 'mdi-react/FormatListBulletedTypeIcon';
import CartIcon from 'mdi-react/CartIcon';
import TimerSandIcon from 'mdi-react/TimerSandIcon';
import CancelIcon from 'mdi-react/CancelIcon';
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
import {Desktop,Mobile} from '../../../Layout/ResponsiveRender';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';

const CounterItem = (props) =>(
    <div className="d-flex align-items-center counterItem w-min">
        <div className={`bigIconRoundedResponsive mr-1 text-${props.colorClass} border-${props.colorClass}`}>
            {props.icon}
        </div>
        <div className="d-flex align-items-center w-min flex-wrap ">
            <p className={`m-0 mr-2 w-100 font-semibold text-darkBlue text-nowrap`}>{props.label}</p>
            < h4 className={`m-0 text-nowrap font-semibold text-${props.colorClass}`} >{props.counter}</h4>
        </div>
    </div>
)

const PedidosStatusNumbersStyled = styled.div`
    :root{
        --midOrange:hsla(35, 100%, 51%, 1);
        --mustard:hsla(45, 100%, 51%, 1);
        --lightGreen:#9ec983;
        --happyGreen: #6abf40;
        --solidGreen:#4CAF50;
        --oldRed:#d2697e;
        --pastelGray: #CBD1CB;
        --midLightGray:#a5abb1;
        --inactive:#bbbcbd;
        --veryLightGray:#f8f9fa;
        --darkBlue:#014c74;
        --deepDarkBlue:#013e61;
        --vmaisOrange:#ff4a05;
        --navHeight:3.5vw;
    }
    .text-midOrange{
        color:var(--midOrange)
    }
    .text-vmaisOrange{
        color:var(--vmaisOrange)
    }
    .text-orange{
        color:var(--orange)
    }
    .text-mustard{
        color:var(--mustard)
    }
    .text-lightGreen{
        color:var(--lightGreen)
    }
    .text-happyGreen{
        color:var(--happyGreen)
    }
    .text-solidGreen{
        color:var(--solidGreen)
    }
    .text-oldRed{
        color:var(--oldRed)
    }
    .text-pastelGray{
        color:var(--pastelGray)
    }
    .text-darkBlue{
        color:var(--darkBlue)
    }
    .text-deepDarkBlue{
        color:var(--deepDarkBlue)
    }    
    .bigIconRoundedResponsive{
        height: 3vw;
        width: 3vw;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .pedidosStatusNumbers .counterItem h4{
        line-height: 1;
    }
    .pedidosStatusNumbers .bigIconRoundedResponsive{
        border-width: 2px;
    }
    .iconResponsive24{
        height: 1.75vw;
        width: 1.75vw;
    }
    .flexCenter{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .responsiveFont18{
        font-size: 1.32vw;
        line-height: 1.32vw;
    }
`;

export default class PedidosStatusNumbers extends PureComponent {

    render() {
        return (
            <PedidosStatusNumbersStyled className="d-flex w-100">
                <CollapseCard
                    className="pedidosStatusNumbers"
                    headerContent={
                        <React.Fragment>
                            <ClipboardTextOutlineIcon className="iconResponsive24"/>
                            <div className="font-semibold flexCenter px-1 responsiveFont18">Pedidos</div>
                        </React.Fragment>
                    }
                    collapseClassName="text-center"
                    contentClass="justify-content-between"
                >
                    <Desktop>
                        <div className="d-flex align-items-center justify-content-lg-between flex-wrap p-2">
                            <CounterItem icon={<CartIcon/>} colorClass={'info'} label="Reservados" counter="557" />
                            <CounterItem icon={<TimerSandIcon/>} colorClass={'orange'} label="NF Pendente" counter="23" />
                            <CounterItem icon={<TimerSandIcon/>} colorClass={'midOrange'} label="À Enviar" counter="2" />
                            <CounterItem icon={<TruckFastIcon/>} colorClass={'mustard'} label="Em transporte" counter="1222" />
                            <CounterItem icon={<MapMarkerIcon/>} colorClass={'solidGreen'} label="Entrege" counter="122" />
                            <CounterItem icon={<CancelIcon/>} colorClass={'oldRed'} label="Cancelados" counter="34"/>
                            <CounterItem icon={<FormatListBulletedTypeIcon/>} colorClass={'secondary'} label="Todos" counter="666"  />
                        </div>
                    </Desktop>
                    <Mobile>
                        <table className="table-separate w-100 px-2">
                            <tbody>
                                <tr>
                                    <td>
                                        <CounterItem icon={<CartIcon/>} colorClass={'info'} label="Reservados" counter="557" />
                                    </td>
                                    <td>
                                        <CounterItem icon={<TimerSandIcon/>} colorClass={'orange'} label="NF Pendente" counter="23" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CounterItem icon={<TimerSandIcon/>} colorClass={'midOrange'} label="À Enviar" counter="1245" />
                                    </td>
                                    <td>
                                        <CounterItem icon={<TruckFastIcon/>} colorClass={'mustard'} label="Em transporte" counter="5" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CounterItem icon={<MapMarkerIcon/>} colorClass={'happyGreen'} label="Entrege" counter="517" />
                                    </td>
                                    <td>
                                        <CounterItem icon={<CancelIcon/>} colorClass={'oldRed'} label="Cancelados" counter="0"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <CounterItem icon={<FormatListBulletedTypeIcon/>} colorClass={'secondary'} label="Todos" counter="557"  />
                                    </td>
                                </tr>                        
                            </tbody>
                        </table>
                    </Mobile>
                </CollapseCard>
            </PedidosStatusNumbersStyled>
        )
    }
}
