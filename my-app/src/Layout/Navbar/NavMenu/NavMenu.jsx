import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavMenu.css';
import DotsVerticalIcon from 'mdi-react/DotsVerticalIcon';
import StoreIcon from 'mdi-react/StoreIcon';
import ArrowExpandAllIcon from 'mdi-react/ArrowExpandAllIcon'
import BookIcon from 'mdi-react/BookIcon';
import FaceIcon from 'mdi-react/FaceIcon';
import LibraryBooksIcon from 'mdi-react/LibraryBooksIcon';
import ExitRunIcon from 'mdi-react/ExitRunIcon';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';

import { Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';

const MenuItem = (props) =>{
  let newTabProps = props.newTab ? { target: '_blank',rel:"noopener noreferrer"} :null;
  return (
      <NavLink label={props.label} to={props.to}  {...newTabProps} className={`text-muted px-2 py-1 d-flex align-items-center text-decoration-none link dropdown-item`} onClick={props.onClick}>
        {props.icon}
        <span className="ml-2">{props.label}</span>
        {props.newTab? <OpenInNewIcon className="ml-auto"/> : null }
      </NavLink>
  )
}
class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown className= "responsiveFont16 threeDots navMenu " isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="span">
              <DotsVerticalIcon />
          </DropdownToggle>
          <DropdownMenu right className="mt-3">
            <div className="w-100 text-center text-muted font-semibold d-lg-none ">Borges</div>
            <div className="dropdown-divider d-lg-none "></div>
            <MenuItem label="Minha Conta" to="/conta" icon={<FaceIcon/>} onClick={this.toggle}/>
            <MenuItem label="Canais de Venda" to="/canais" icon={<ArrowExpandAllIcon/>} onClick={this.toggle}/>
            <MenuItem label="Catálogo" to="/catalogo" newTab icon={<BookIcon/>} onClick={this.toggle}/>
            <MenuItem label="Termos de Uso" to="/termos" icon={<LibraryBooksIcon/>} onClick={this.toggle}/>
            <MenuItem label="Serviços" to="/servicos" icon={<StoreIcon/>} onClick={this.toggle}/>
            <MenuItem label="Sair do Sistema" to="/logout" icon={<ExitRunIcon/>} onClick={this.toggle}/>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}
export default NavMenu;