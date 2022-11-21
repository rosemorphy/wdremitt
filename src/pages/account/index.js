import Layout from '../../components/AccountLayout'
import Button from '../../components/Button'
import Link from 'next/link'
import { parseCookies } from '../../config/parseCookies'
import { API_URL } from '../../config/index'
import Image from 'next/image'
import transImg from '../../public/transaction.png'
import { formatToCurrency } from '../../helpers'

const Dashboard = ({user}) => {

  const data = user

  return (
    <Layout>
      <header className='accHeader'>
        <div className='title'>
          <h2>Home</h2>
          <p>{`Welcome, ${data?.firstname}  ${data?.lastname}`}</p>
        </div>
        <Link href="/account/payment">
          <a>
            <Button>Proceed to recieve payment</Button>
          </a>
        </Link>
      </header>

      <section className='accSection'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='balanceCard'>
              <h6>YOUR ACCOUNT BALANCE</h6>
              <h3 className='balance'>{data?.recieveCurrency} {!data?.recieveAmount ? '0.00' : formatToCurrency(data?.recieveAmount)}</h3>
              <Link href='/'>
                <a className='link'>Proceed to recieve payment</a>
              </Link>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='balanceCard'>
              <h4 className='title'>Transactions</h4>
              <div className='noTransaction'>
                <Image src={transImg} alt="Transactions Image" />
                <h5>You have no transactions</h5>
                <p>You haven&lsquo;t make any transactions yet!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  const resUser = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const user = await resUser.json()

  // console.log(user)


  return {
    props: {
      user: user,
      token: token
    },
  };
}

export default Dashboard
