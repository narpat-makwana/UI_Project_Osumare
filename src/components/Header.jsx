import React from "react";

const Header = () => {
  return (
    <div className="h-28 flex flex-row justify-between w-full bg-white">
      <img className=""
        src="https://s3-alpha-sig.figma.com/img/5f88/d08c/69c6234b33868a4736d27770cd6c9dec?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iFQSs4ufVdoi2HwBv1CIMDeGjLssiaadD0O~FeioIWgDyFg8excDlOx4Cm2giPr1eZN0ZOi6f1mczQyvLoMfI-FSffItIKT4L-YfGxSvpw87AnV99jwtU3X7hixLQ~Q28mWV48705p2SH5ewP4GoROo6XLw7HgwaMp2ZLgT7tR6k0EgvMU58TJUig22IqpQgGhEUmvbngW9xbDmUzNgCH0WTp9Fd2uY~QR76gDiWldLPB~enXhxfgQL7xARTv0NRctxz1zfEzX2c4H1C9oJTdhDTa5id0Cwf1lA~RTIZWhrTINLh7edAwyUrVnxBo992qRJQnA9nvUd1GGE-jY~pwQ__"
        alt="logo"
      />
      <button className="h-10 w-52 mx-10 mt-10 text-base font-medium rounded-full border border-black bg-slate-50 ">Contact us</button>
    </div>
  );
};

export default Header;
