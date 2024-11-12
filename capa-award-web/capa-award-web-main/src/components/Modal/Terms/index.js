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

export default function ModalTerms(){

    const { setModal, modal } = useContext(CoreContext) 

    return (
        <>
            <ModalContainerOut>
                <ModalContainerIn>
                    <ModalHeaderClose onClick={() => setModal(null)} />
                    <ModalHeaderTitle>Termos de uso</ModalHeaderTitle>
                    <ModalBody> 

                    <h5>1. Aceitação dos Termos</h5>
                    <p>Ao acessar e utilizar nossos serviços de assessoria para editais universitários, você concorda com os termos e condições estabelecidos neste documento. Caso não concorde com qualquer um dos termos, por favor, não utilize nossos serviços.</p>

                    <h5>2. Descrição dos Serviços</h5>
                    <p>Oferecemos serviços de assessoria e consultoria para editais universitários, incluindo análise de editais, elaboração de propostas, planejamento e gestão de projetos, e consultoria personalizada. Os detalhes específicos de nossos serviços serão descritos em cada proposta individual e/ou contrato.</p>

                    <h5>3. Cadastro e Responsabilidades do Usuário</h5>
                    <p>Para utilizar nossos serviços, você pode ser solicitado a fornecer informações pessoais e criar uma conta. É sua responsabilidade fornecer informações precisas e manter a confidencialidade de suas credenciais de acesso. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.</p>

                    <h5>4. Propriedade Intelectual</h5>
                    <p>Todos os conteúdos e materiais fornecidos por nós, incluindo documentos, guias, e outras informações, são de nossa propriedade ou licenciados por nós e estão protegidos por direitos autorais e outras leis de propriedade intelectual. É proibida a reprodução, distribuição ou modificação desses materiais sem nossa autorização expressa.</p>

                    <h5>5. Uso dos Serviços</h5>
                    <p>Você concorda em utilizar nossos serviços apenas para os fins previstos e de acordo com todos os requisitos dos editais universitários que você está considerando. É sua responsabilidade garantir que todas as informações fornecidas a nós sejam precisas e completas.</p>

                    <h5>6. Limitação de Responsabilidade</h5>
                    <p>Nossos serviços são fornecidos "no estado em que se encontram" e não oferecemos garantias de qualquer tipo, expressas ou implícitas, sobre a precisão, adequação ou sucesso dos projetos apresentados. Não nos responsabilizamos por quaisquer danos diretos, indiretos, acidentais ou consequenciais que possam resultar do uso de nossos serviços.</p>

                    <h5>7. Modificações dos Termos</h5>
                    <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações serão publicadas em nosso site e entrarão em vigor imediatamente. É sua responsabilidade revisar periodicamente os Termos de Uso para se manter informado sobre quaisquer mudanças.</p>

                    <h5>8. Rescisão</h5>
                    <p>Podemos suspender ou encerrar sua conta e acesso aos nossos serviços a qualquer momento, com ou sem motivo, se considerarmos que você violou qualquer um dos termos estabelecidos.</p>

                    <h5>9. Lei Aplicável</h5>
                    <p>Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa relacionada a estes Termos será resolvida nos tribunais competentes de São Paulo/SP.</p>

                    <h5>10. Contato</h5>
                    <p>Se você tiver quaisquer dúvidas sobre estes Termos de Uso ou sobre nossos serviços, por favor, entre em contato conosco através do e-mail <a href="mailto:contato@capaaward.com">contato@capaaward.com</a>.</p>

                    </ModalBody>
                </ModalContainerIn>
            </ModalContainerOut>
        </>
    )
}