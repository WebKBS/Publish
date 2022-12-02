const paymentBtn = document.querySelector('.payment_btn');
const walletBtn = document.querySelector('.wallet_btn');
const nftBtn = document.querySelector('.nft_btn');
const modalInfo = document.querySelector('.modal_info');
const modalMint = document.querySelector('.modal_mint_info');
const modalWallet = document.querySelector('.connect_wallet');
const modal = document.querySelectorAll('.modal')
const cancelBtn = document.querySelector('.cancel_btn')

addClassList(paymentBtn, modalInfo)
addClassList(walletBtn, modalMint)
addClassList(nftBtn, modalWallet)

removeClassList(cancelBtn, modalMint)

modal.forEach(ev => {
    ev.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains("modal")) {
            target.classList.remove('on');
            return;
        }
    })
})