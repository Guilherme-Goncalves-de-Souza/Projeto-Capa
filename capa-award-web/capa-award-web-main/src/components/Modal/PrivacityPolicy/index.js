import React, { useContext, useEffect, useState } from 'react'
import { ModalActionButton, ModalActions, ModalBody, ModalContainerIn, ModalContainerOut, ModalHeaderClose, ModalHeaderTitle } from './styled'
import Select from 'components/Form/Select'
import Button from 'components/Form/Button'
import { CoreContext } from 'context/CoreContext'
import { Read, Create, Update, ReadOne } from 'services/users'
import { Read as ReadInstituitions } from 'services/instituitions'
import Input from 'components/Form/Input'
import { exposeStrapiError } from 'utils'
import { toast } from 'react-toastify'

export default function ModalPrivacityPolicy(){

    const { setModal, modal } = useContext(CoreContext) 

    return (
        <>
            <ModalContainerOut>
                <ModalContainerIn>
                    <ModalHeaderClose onClick={() => setModal(null)} />
                    <ModalHeaderTitle>Política de Privacidade</ModalHeaderTitle>
                    <ModalBody> 
                        
                    <h5>1. Coleta de Informações</h5>
                    <p>Coletamos informações pessoais que você nos fornece ao se cadastrar, como nome, e-mail e telefone. Também podemos coletar informações sobre como você utiliza nossos serviços, como registros de acesso e dados de navegação.</p>

                    <h5>2. Uso das Informações</h5>
                    <p>Utilizamos suas informações para fornecer e melhorar nossos serviços, comunicar atualizações e responder a suas perguntas. Também podemos usar suas informações para fins de marketing, desde que você tenha dado seu consentimento para isso.</p>

                    <h5>3. Compartilhamento de Informações</h5>
                    <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir com a lei, proteger nossos direitos ou prestar nossos serviços (por exemplo, com prestadores de serviços que auxiliam na operação do nosso site).</p>

                    <h5>4. Segurança</h5>
                    <p>Tomamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir a segurança absoluta.</p>

                    <h5>5. Seus Direitos</h5>
                    <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais que mantemos. Se desejar exercer esses direitos, entre em contato conosco através das informações fornecidas na seção "Contato" abaixo.</p>

                    <h5>6. Cookies</h5>
                    <p>Utilizamos cookies e tecnologias similares para melhorar a sua experiência em nosso site. Os cookies ajudam a lembrar suas preferências e a entender como você usa nossos serviços. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do nosso site.</p>

                    <h5>7. Alterações na Política</h5>
                    <p>Podemos atualizar esta Política de Privacidade ocasionalmente. As alterações serão publicadas nesta página e, se forem significativas, notificaremos você por e-mail ou através de uma notificação em nosso site.</p>

                    <h5>8. Contato</h5>
                    <p>Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre a forma como tratamos suas informações pessoais, entre em contato conosco através do e-mail <a href="mailto:seuemail@dominio.com">seuemail@dominio.com</a> ou pelo telefone [seu telefone].</p>


                    </ModalBody>
                </ModalContainerIn>
            </ModalContainerOut>
        </>
    )
}