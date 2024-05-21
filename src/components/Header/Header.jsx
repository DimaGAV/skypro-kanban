
import { useState } from "react";
import * as S from "./Header.styled";
import { Container } from "../../styled/common";
import { Link, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../App";
import { useUser } from "../../hooks/useUser";


const Header = () => {
	const {user} = useUser()
	const [userWindow, setWindow] = useState(true)
	function handleClick() {
		setWindow(!userWindow)

		if (userWindow){
			document.getElementById("user-set-target").style.display = "block"
		}
		else {
			document.getElementById("user-set-target").style.display = "none"
		}
	}

	const navigate = useNavigate();
const handleExit =() => {
navigate(AppRoutes.USER_EXIT)
}

    return ( 
        <S.Header>
			<Container>
				<S.Block>
					<S.Logo>
						<a href="" target="_self"><img src="/images/logo.png" alt="logo" /></a>
					</S.Logo>
					<S.Logo>
						<a href="" target="_self"><img src="/images/logo_dark.png" alt="logo" /></a>
					</S.Logo>
					<S.Nav>
						<S.BtnMainNew id="btnMainNew">
							<Link to={AppRoutes.NEWCARD}><S.BtnMainNewText>Создать новую задачу</S.BtnMainNewText></Link>
							</S.BtnMainNew>            
						<S.User href="#" 
						onClick = {handleClick}>{user.name}</S.User>
						<div className="header__pop-user-set pop-user-set" id="user-set-target">
							<p className="pop-user-set__name">{user.name}</p>
							<p className="pop-user-set__mail">{user.login}</p>
							<div className="pop-user-set__theme">
								<p>Темная тема</p>
								<input type="checkbox" className="checkbox" name="checkbox" />
							</div>
							<button onClick={handleExit} type="button" className="_hover03">Выйти</button>
						</div>
					</S.Nav>					
				</S.Block>
			</Container>			
		</S.Header>
     );
}
 
export default Header;
